import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { SharedService } from './services/shared.service';
  
export const sharedInterceptor: HttpInterceptorFn = (req, next) => {

  const _cookieService = inject(SharedService);
  
  console.log(`Request on the way`);

  alert("aaaa");
  return next(req);
};
