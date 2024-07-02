import { ModuleWithProviders } from '@angular/core';
import { NgCulqiService } from './ng-culqi.service';

export class NgCulqiModule {
    public static forRoot(environment: any): ModuleWithProviders<NgCulqiModule> {
        console.log('NgCulqiModule.forRoot() environment', environment);
        return {
            ngModule: NgCulqiModule,
            providers: [
                NgCulqiService,
                {
                    provide: 'env',
                    useValue: environment
                }
            ]
        };
    }
}