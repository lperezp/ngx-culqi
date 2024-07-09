import { ModuleWithProviders } from '@angular/core';
import { NgxCulqiService } from './ngx-culqi.service';

export class NgCulqiModule {
    public static forRoot(environment: any): ModuleWithProviders<NgCulqiModule> {
        console.log('NgCulqiModule.forRoot() environment', environment);
        return {
            ngModule: NgCulqiModule,
            providers: [
                NgxCulqiService,
                {
                    provide: 'env',
                    useValue: environment
                }
            ]
        };
    }
}