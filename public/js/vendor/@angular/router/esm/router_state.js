import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { PRIMARY_OUTLET } from './shared';
import { UrlPathWithParams } from './url_tree';
import { shallowEqual } from './utils/collection';
import { Tree, TreeNode } from './utils/tree';
export class RouterState extends Tree {
    constructor(root, queryParams, fragment, snapshot) {
        super(root);
        this.queryParams = queryParams;
        this.fragment = fragment;
        this.snapshot = snapshot;
    }
    toString() { return this.snapshot.toString(); }
}
export function createEmptyState(urlTree, rootComponent) {
    const snapshot = createEmptyStateSnapshot(urlTree, rootComponent);
    const emptyUrl = new BehaviorSubject([new UrlPathWithParams('', {})]);
    const emptyParams = new BehaviorSubject({});
    const emptyQueryParams = new BehaviorSubject({});
    const fragment = new BehaviorSubject('');
    const activated = new ActivatedRoute(emptyUrl, emptyParams, PRIMARY_OUTLET, rootComponent, snapshot.root);
    activated.snapshot = snapshot.root;
    return new RouterState(new TreeNode(activated, []), emptyQueryParams, fragment, snapshot);
}
function createEmptyStateSnapshot(urlTree, rootComponent) {
    const emptyParams = {};
    const emptyQueryParams = {};
    const fragment = '';
    const activated = new ActivatedRouteSnapshot([], emptyParams, PRIMARY_OUTLET, rootComponent, null, urlTree.root, -1);
    return new RouterStateSnapshot('', new TreeNode(activated, []), emptyQueryParams, fragment);
}
export class ActivatedRoute {
    constructor(url, params, outlet, component, futureSnapshot) {
        this.url = url;
        this.params = params;
        this.outlet = outlet;
        this.component = component;
        this._futureSnapshot = futureSnapshot;
    }
    toString() {
        return this.snapshot ? this.snapshot.toString() : `Future(${this._futureSnapshot})`;
    }
}
export class ActivatedRouteSnapshot {
    constructor(url, params, outlet, component, routeConfig, urlSegment, lastPathIndex) {
        this.url = url;
        this.params = params;
        this.outlet = outlet;
        this.component = component;
        this._routeConfig = routeConfig;
        this._urlSegment = urlSegment;
        this._lastPathIndex = lastPathIndex;
    }
    toString() {
        const url = this.url.map(s => s.toString()).join('/');
        const matched = this._routeConfig ? this._routeConfig.path : '';
        return `Route(url:'${url}', path:'${matched}')`;
    }
}
export class RouterStateSnapshot extends Tree {
    constructor(url, root, queryParams, fragment) {
        super(root);
        this.url = url;
        this.queryParams = queryParams;
        this.fragment = fragment;
    }
    toString() { return serializeNode(this._root); }
}
function serializeNode(node) {
    const c = node.children.length > 0 ? ` { ${node.children.map(serializeNode).join(", ")} } ` : '';
    return `${node.value}${c}`;
}
export function advanceActivatedRoute(route) {
    if (route.snapshot && !shallowEqual(route.snapshot.params, route._futureSnapshot.params)) {
        route.snapshot = route._futureSnapshot;
        route.url.next(route.snapshot.url);
        route.params.next(route.snapshot.params);
    }
    else {
        route.snapshot = route._futureSnapshot;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVyX3N0YXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3JvdXRlcl9zdGF0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiT0FDTyxFQUFDLGVBQWUsRUFBQyxNQUFNLHNCQUFzQjtPQUk3QyxFQUFDLGNBQWMsRUFBUyxNQUFNLFVBQVU7T0FDeEMsRUFBQyxpQkFBaUIsRUFBc0IsTUFBTSxZQUFZO09BQzFELEVBQUMsWUFBWSxFQUFDLE1BQU0sb0JBQW9CO09BQ3hDLEVBQUMsSUFBSSxFQUFFLFFBQVEsRUFBQyxNQUFNLGNBQWM7QUFrQjNDLGlDQUFpQyxJQUFJO0lBSW5DLFlBQ0ksSUFBOEIsRUFBUyxXQUErQixFQUMvRCxRQUE0QixFQUFTLFFBQTZCO1FBQzNFLE1BQU0sSUFBSSxDQUFDLENBQUM7UUFGNkIsZ0JBQVcsR0FBWCxXQUFXLENBQW9CO1FBQy9ELGFBQVEsR0FBUixRQUFRLENBQW9CO1FBQVMsYUFBUSxHQUFSLFFBQVEsQ0FBcUI7SUFFN0UsQ0FBQztJQUVELFFBQVEsS0FBYSxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDekQsQ0FBQztBQUVELGlDQUFpQyxPQUFnQixFQUFFLGFBQW1CO0lBQ3BFLE1BQU0sUUFBUSxHQUFHLHdCQUF3QixDQUFDLE9BQU8sRUFBRSxhQUFhLENBQUMsQ0FBQztJQUNsRSxNQUFNLFFBQVEsR0FBRyxJQUFJLGVBQWUsQ0FBQyxDQUFDLElBQUksaUJBQWlCLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN0RSxNQUFNLFdBQVcsR0FBRyxJQUFJLGVBQWUsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUM1QyxNQUFNLGdCQUFnQixHQUFHLElBQUksZUFBZSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ2pELE1BQU0sUUFBUSxHQUFHLElBQUksZUFBZSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3pDLE1B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QUFDLENBQUMsQ0FBQyxDQUFDO0FBQzFELENBQUM7QUFFRCx1QkFBdUIsSUFBc0M7SUFDM0QsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxHQUFHLE1BQU0sSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO0lBQ2pHLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxFQUFFLENBQUM7QUFDN0IsQ0FBQztBQVFELHNDQUFzQyxLQUFxQjtJQUN6RCxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsUUFBUSxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3pGLEtBQUssQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDLGVBQWUsQ0FBQztRQUNqQyxLQUFLLENBQUMsR0FBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3BDLEtBQUssQ0FBQyxNQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUFDLElBQUksQ0FBQyxDQUFDO1FBQ04sS0FBSyxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUMsZUFBZSxDQUFDO0lBQ3pDLENBQUM7QUFDSCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnRGYWN0b3J5LCBUeXBlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7QmVoYXZpb3JTdWJqZWN0fSBmcm9tICdyeGpzL0JlaGF2aW9yU3ViamVjdCc7XG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XG5cbmltcG9ydCB7Um91dGV9IGZyb20gJy4vY29uZmlnJztcbmltcG9ydCB7UFJJTUFSWV9PVVRMRVQsIFBhcmFtc30gZnJvbSAnLi9zaGFyZWQnO1xuaW1wb3J0IHtVcmxQYXRoV2l0aFBhcmFtcywgVXJsU2VnbWVudCwgVXJsVHJlZX0gZnJvbSAnLi91cmxfdHJlZSc7XG5pbXBvcnQge3NoYWxsb3dFcXVhbH0gZnJvbSAnLi91dGlscy9jb2xsZWN0aW9uJztcbmltcG9ydCB7VHJlZSwgVHJlZU5vZGV9IGZyb20gJy4vdXRpbHMvdHJlZSc7XG5cblxuLyoqXG4gKiBUaGUgc3RhdGUgb2YgdGhlIHJvdXRlci5cbiAqXG4gKiAjIyMgVXNhZ2VcbiAqXG4gKiBgYGBcbiAqIGNsYXNzIE15Q29tcG9uZW50IHtcbiAqICAgY29uc3RydWN0b3Iocm91dGVyOiBSb3V0ZXIpIHtcbiAqICAgICBjb25zdCBzdGF0ZSA9IHJvdXRlci5yb3V0ZXJTdGF0ZTtcbiAqICAgICBjb25zdCBpZDogT2JzZXJ2YWJsZTxzdHJpbmc+ID0gc3RhdGUuZmlyc3RDaGlsZChzdGF0ZS5yb290KS5wYXJhbXMubWFwKHAgPT4gcC5pZCk7XG4gKiAgICAgY29uc3QgaXNEZWJ1ZzogT2JzZXJ2YWJsZTxzdHJpbmc+ID0gc3RhdGUucXVlcnlQYXJhbXMubWFwKHEgPT4gcS5kZWJ1Zyk7XG4gKiAgIH1cbiAqIH1cbiAqIGBgYFxuICovXG5leHBvcnQgY2xhc3MgUm91dGVyU3RhdGUgZXh0ZW5kcyBUcmVlPEFjdGl2YXRlZFJvdXRlPiB7XG4gIC8qKlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIGNvbnN0cnVjdG9yKFxuICAgICAgcm9vdDogVHJlZU5vZGU8QWN0aXZhdGVkUm91dGU+LCBwdWJsaWMgcXVlcnlQYXJhbXM6IE9ic2VydmFibGU8UGFyYW1zPixcbiAgICAgIHB1YmxpYyBmcmFnbWVudDogT2JzZXJ2YWJsZTxzdHJpbmc+LCBwdWJsaWMgc25hcHNob3Q6IFJvdXRlclN0YXRlU25hcHNob3QpIHtcbiAgICBzdXBlcihyb290KTtcbiAgfVxuXG4gIHRvU3RyaW5nKCk6IHN0cmluZyB7IHJldHVybiB0aGlzLnNuYXBzaG90LnRvU3RyaW5nKCk7IH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUVtcHR5U3RhdGUodXJsVHJlZTogVXJsVHJlZSwgcm9vdENvbXBvbmVudDogVHlwZSk6IFJvdXRlclN0YXRlIHtcbiAgY29uc3Qgc25hcHNob3QgPSBjcmVhdGVFbXB0eVN0YXRlU25hcHNob3QodXJsVHJlZSwgcm9vdENvbXBvbmVudCk7XG4gIGNvbnN0IGVtcHR5VXJsID0gbmV3IEJlaGF2aW9yU3ViamVjdChbbmV3IFVybFBhdGhXaXRoUGFyYW1zKCcnLCB7fSldKTtcbiAgY29uc3QgZW1wdHlQYXJhbXMgPSBuZXcgQmVoYXZpb3JTdWJqZWN0KHt9KTtcbiAgY29uc3QgZW1wdHlRdWVyeVBhcmFtcyA9IG5ldyBCZWhhdmlvclN1YmplY3Qoe30pO1xuICBjb25zdCBmcmFnbWVudCA9IG5ldyBCZWhhdmlvclN1YmplY3QoJycpO1xuICBjb25zdCBhY3RpdmF0ZWQgPVxuICAgICAgbmV3IEFjdGl2YXRlZFJvdXRlKGVtcHR5VXJsLCBlbXB0eVBhcmFtcywgUFJJTUFSWV9PVVRMRVQsIHJvb3RDb21wb25lbnQsIHNuYXBzaG90LnJvb3QpO1xuICBhY3RpdmF0ZWQuc25hcHNob3QgPSBzbmFwc2hvdC5yb290O1xuICByZXR1cm4gbmV3IFJvdXRlclN0YXRlKFxuICAgICAgbmV3IFRyZWVOb2RlPEFjdGl2YXRlZFJvdXRlPihhY3RpdmF0ZWQsIFtdKSwgZW1wdHlRdWVyeVBhcmFtcywgZnJhZ21lbnQsIHNuYXBzaG90KTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRW1wdHlTdGF0ZVNuYXBzaG90KHVybFRyZWU6IFVybFRyZWUsIHJvb3RDb21wb25lbnQ6IFR5cGUpOiBSb3V0ZXJTdGF0ZVNuYXBzaG90IHtcbiAgY29uc3QgZW1wdHlQYXJhbXMgPSB7fTtcbiAgY29uc3QgZW1wdHlRdWVyeVBhcmFtcyA9IHt9O1xuICBjb25zdCBmcmFnbWVudCA9ICcnO1xuICBjb25zdCBhY3RpdmF0ZWQgPSBuZXcgQWN0aXZhdGVkUm91dGVTbmFwc2hvdChcbiAgICAgIFtdLCBlbXB0eVBhcmFtcywgUFJJTUFSWV9PVVRMRVQsIHJvb3RDb21wb25lbnQsIG51bGwsIHVybFRyZWUucm9vdCwgLTEpO1xuICByZXR1cm4gbmV3IFJvdXRlclN0YXRlU25hcHNob3QoXG4gICAgICAnJywgbmV3IFRyZWVOb2RlPEFjdGl2YXRlZFJvdXRlU25hcHNob3Q+KGFjdGl2YXRlZCwgW10pLCBlbXB0eVF1ZXJ5UGFyYW1zLCBmcmFnbWVudCk7XG59XG5cbi8qKlxuICogQ29udGFpbnMgdGhlIGluZm9ybWF0aW9uIGFib3V0IGEgY29tcG9uZW50IGxvYWRlZCBpbiBhbiBvdXRsZXQuIFRoZSBpbmZvcm1hdGlvbiBpcyBwcm92aWRlZFxuICogdGhyb3VnaFxuICogdGhlIHBhcmFtcyBhbmQgdXJsU2VnbWVudHMgb2JzZXJ2YWJsZXMuXG4gKlxuICogIyMjIFVzYWdlXG4gKlxuICogYGBgXG4gKiBjbGFzcyBNeUNvbXBvbmVudCB7XG4gKiAgIGNvbnN0cnVjdG9yKHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSkge1xuICogICAgIGNvbnN0IGlkOiBPYnNlcnZhYmxlPHN0cmluZz4gPSByb3V0ZS5wYXJhbXMubWFwKHAgPT4gcC5pZCk7XG4gKiAgIH1cbiAqIH1cbiAqIGBgYFxuICovXG5leHBvcnQgY2xhc3MgQWN0aXZhdGVkUm91dGUge1xuICAvKiogQGludGVybmFsICovXG4gIF9mdXR1cmVTbmFwc2hvdDogQWN0aXZhdGVkUm91dGVTbmFwc2hvdDtcbiAgc25hcHNob3Q6IEFjdGl2YXRlZFJvdXRlU25hcHNob3Q7XG5cbiAgLyoqXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgY29uc3RydWN0b3IoXG4gICAgICBwdWJsaWMgdXJsOiBPYnNlcnZhYmxlPFVybFBhdGhXaXRoUGFyYW1zW10+LCBwdWJsaWMgcGFyYW1zOiBPYnNlcnZhYmxlPFBhcmFtcz4sXG4gICAgICBwdWJsaWMgb3V0bGV0OiBzdHJpbmcsIHB1YmxpYyBjb21wb25lbnQ6IFR5cGV8c3RyaW5nLFxuICAgICAgZnV0dXJlU25hcHNob3Q6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QpIHtcbiAgICB0aGlzLl9mdXR1cmVTbmFwc2hvdCA9IGZ1dHVyZVNuYXBzaG90O1xuICB9XG5cbiAgdG9TdHJpbmcoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5zbmFwc2hvdCA/IHRoaXMuc25hcHNob3QudG9TdHJpbmcoKSA6IGBGdXR1cmUoJHt0aGlzLl9mdXR1cmVTbmFwc2hvdH0pYDtcbiAgfVxufVxuXG4vKipcbiAqIENvbnRhaW5zIHRoZSBpbmZvcm1hdGlvbiBhYm91dCBhIGNvbXBvbmVudCBsb2FkZWQgaW4gYW4gb3V0bGV0IGF0IGEgcGFydGljdWxhciBtb21lbnQgaW4gdGltZS5cbiAqXG4gKiAjIyMgVXNhZ2VcbiAqXG4gKiBgYGBcbiAqIGNsYXNzIE15Q29tcG9uZW50IHtcbiAqICAgY29uc3RydWN0b3Iocm91dGU6IEFjdGl2YXRlZFJvdXRlKSB7XG4gKiAgICAgY29uc3QgaWQ6IHN0cmluZyA9IHJvdXRlLnNuYXBzaG90LnBhcmFtcy5pZDtcbiAqICAgfVxuICogfVxuICogYGBgXG4gKi9cbmV4cG9ydCBjbGFzcyBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90IHtcbiAgLyoqXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgX3Jlc29sdmVkQ29tcG9uZW50RmFjdG9yeTogQ29tcG9uZW50RmFjdG9yeTxhbnk+O1xuXG4gIC8qKiBAaW50ZXJuYWwgKiovXG4gIF9yb3V0ZUNvbmZpZzogUm91dGU7XG5cbiAgLyoqIEBpbnRlcm5hbCAqKi9cbiAgX3VybFNlZ21lbnQ6IFVybFNlZ21lbnQ7XG5cbiAgX2xhc3RQYXRoSW5kZXg6IG51bWJlcjtcblxuICAvKipcbiAgICogQGludGVybmFsXG4gICAqL1xuICBjb25zdHJ1Y3RvcihcbiAgICAgIHB1YmxpYyB1cmw6IFVybFBhdGhXaXRoUGFyYW1zW10sIHB1YmxpYyBwYXJhbXM6IFBhcmFtcywgcHVibGljIG91dGxldDogc3RyaW5nLFxuICAgICAgcHVibGljIGNvbXBvbmVudDogVHlwZXxzdHJpbmcsIHJvdXRlQ29uZmlnOiBSb3V0ZSwgdXJsU2VnbWVudDogVXJsU2VnbWVudCxcbiAgICAgIGxhc3RQYXRoSW5kZXg6IG51bWJlcikge1xuICAgIHRoaXMuX3JvdXRlQ29uZmlnID0gcm91dGVDb25maWc7XG4gICAgdGhpcy5fdXJsU2VnbWVudCA9IHVybFNlZ21lbnQ7XG4gICAgdGhpcy5fbGFzdFBhdGhJbmRleCA9IGxhc3RQYXRoSW5kZXg7XG4gIH1cblxuICB0b1N0cmluZygpOiBzdHJpbmcge1xuICAgIGNvbnN0IHVybCA9IHRoaXMudXJsLm1hcChzID0+IHMudG9TdHJpbmcoKSkuam9pbignLycpO1xuICAgIGNvbnN0IG1hdGNoZWQgPSB0aGlzLl9yb3V0ZUNvbmZpZyA/IHRoaXMuX3JvdXRlQ29uZmlnLnBhdGggOiAnJztcbiAgICByZXR1cm4gYFJvdXRlKHVybDonJHt1cmx9JywgcGF0aDonJHttYXRjaGVkfScpYDtcbiAgfVxufVxuXG4vKipcbiAqIFRoZSBzdGF0ZSBvZiB0aGUgcm91dGVyIGF0IGEgcGFydGljdWxhciBtb21lbnQgaW4gdGltZS5cbiAqXG4gKiAjIyMgVXNhZ2VcbiAqXG4gKiBgYGBcbiAqIGNsYXNzIE15Q29tcG9uZW50IHtcbiAqICAgY29uc3RydWN0b3Iocm91dGVyOiBSb3V0ZXIpIHtcbiAqICAgICBjb25zdCBzbmFwc2hvdCA9IHJvdXRlci5yb3V0ZXJTdGF0ZS5zbmFwc2hvdDtcbiAqICAgfVxuICogfVxuICogYGBgXG4gKi9cbmV4cG9ydCBjbGFzcyBSb3V0ZXJTdGF0ZVNuYXBzaG90IGV4dGVuZHMgVHJlZTxBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90PiB7XG4gIC8qKlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIGNvbnN0cnVjdG9yKFxuICAgICAgcHVibGljIHVybDogc3RyaW5nLCByb290OiBUcmVlTm9kZTxBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90PiwgcHVibGljIHF1ZXJ5UGFyYW1zOiBQYXJhbXMsXG4gICAgICBwdWJsaWMgZnJhZ21lbnQ6IHN0cmluZykge1xuICAgIHN1cGVyKHJvb3QpO1xuICB9XG5cbiAgdG9TdHJpbmcoKTogc3RyaW5nIHsgcmV0dXJuIHNlcmlhbGl6ZU5vZGUodGhpcy5fcm9vdCk7IH1cbn1cblxuZnVuY3Rpb24gc2VyaWFsaXplTm9kZShub2RlOiBUcmVlTm9kZTxBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90Pik6IHN0cmluZyB7XG4gIGNvbnN0IGMgPSBub2RlLmNoaWxkcmVuLmxlbmd0aCA+IDAgPyBgIHsgJHtub2RlLmNoaWxkcmVuLm1hcChzZXJpYWxpemVOb2RlKS5qb2luKFwiLCBcIil9IH0gYCA6ICcnO1xuICByZXR1cm4gYCR7bm9kZS52YWx1ZX0ke2N9YDtcbn1cblxuXG4vKipcbiAqIFRoZSBleHBlY3RhdGlvbiBpcyB0aGF0IHRoZSBhY3RpdmF0ZSByb3V0ZSBpcyBjcmVhdGVkIHdpdGggdGhlIHJpZ2h0IHNldCBvZiBwYXJhbWV0ZXJzLlxuICogU28gd2UgcHVzaCBuZXcgdmFsdWVzIGludG8gdGhlIG9ic2VydmFibGVzIG9ubHkgd2hlbiB0aGV5IGFyZSBub3QgdGhlIGluaXRpYWwgdmFsdWVzLlxuICogQW5kIHdlIGRldGVjdCB0aGF0IGJ5IGNoZWNraW5nIGlmIHRoZSBzbmFwc2hvdCBmaWVsZCBpcyBzZXQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhZHZhbmNlQWN0aXZhdGVkUm91dGUocm91dGU6IEFjdGl2YXRlZFJvdXRlKTogdm9pZCB7XG4gIGlmIChyb3V0ZS5zbmFwc2hvdCAmJiAhc2hhbGxvd0VxdWFsKHJvdXRlLnNuYXBzaG90LnBhcmFtcywgcm91dGUuX2Z1dHVyZVNuYXBzaG90LnBhcmFtcykpIHtcbiAgICByb3V0ZS5zbmFwc2hvdCA9IHJvdXRlLl9mdXR1cmVTbmFwc2hvdDtcbiAgICAoPGFueT5yb3V0ZS51cmwpLm5leHQocm91dGUuc25hcHNob3QudXJsKTtcbiAgICAoPGFueT5yb3V0ZS5wYXJhbXMpLm5leHQocm91dGUuc25hcHNob3QucGFyYW1zKTtcbiAgfSBlbHNlIHtcbiAgICByb3V0ZS5zbmFwc2hvdCA9IHJvdXRlLl9mdXR1cmVTbmFwc2hvdDtcbiAgfVxufSJdfQ==