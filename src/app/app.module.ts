import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {
  AppService,
  DaoService,
  CacheService,
  CommonService,
  MenuService,
  MessageService,
  UserService,
  SysappbuttonsService,
  SysappfieldsService,
  SysappfldgroupService,
  SysapplinksService,
  SysdicappdetailService,
  SysdicappService,
  SysdicdetailService,
  SysdicService,
  SysmessageService,
  SysinterfaceparamService,
  SysinterfaceService,
  SysmenuService,
  SysstyleService,
  LogService,
  ProvidersService,ProductService
} from 'fccore';
import {
  FcnavModule,
  FcbasicModule,
  FcadModule,
  FcmodalModule,
  FctabModule,
  FctlbModule,
  FcsearchModule,
  FcalertModule,
  FclayoutModule,
  FclistModule
} from 'fccomponent';
import { FormsModule } from '@angular/forms';
import { RouterModule, RouteReuseStrategy } from '@angular/router';
import { environment } from '../environments/environment';
import { AppRouters } from './app.route';
import { LayoutComponent } from './layout/layout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SigninComponent } from './system/components/signin/signin.component';
import { SignupComponent } from './system/components/signup/signup.component';
import { LayoutService } from './system/services/layout.service';
import { FcRouteReuseStrategy } from './system/services/routereusestrategy.service';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { NzMessageService } from 'ng-zorro-antd';
@NgModule({
  imports: [
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,    
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot(AppRouters),
    FcnavModule,
    FcbasicModule,
    FcadModule,
    FctabModule,
    FctlbModule,
    FcsearchModule,
    FcalertModule,
    FclayoutModule,
    FclistModule,
    FcmodalModule
  ],
  declarations: [
    AppComponent,
    LayoutComponent,
    SigninComponent,
    SignupComponent
  ],
  providers: [
    AppService,
    DaoService,
    CacheService,
    CommonService,
    MenuService,
    MessageService,
    UserService,
    ProvidersService,
    LogService,
    ProductService,
    SysappbuttonsService,
    SysappfieldsService,
    SysappfldgroupService,
    SysapplinksService,
    SysdicappdetailService,
    SysdicappService,
    SysdicdetailService,
    SysdicService,
    SysmessageService,
    SysinterfaceparamService,
    SysinterfaceService,
    SysmenuService,
    SysstyleService,
    LayoutService,
    NzMessageService,
    { provide: RouteReuseStrategy, useClass: FcRouteReuseStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
