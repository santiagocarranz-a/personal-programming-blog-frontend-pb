import { Injectable, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResponsiveService{

  responsiveSizesSubject = new BehaviorSubject<any>({
    xSmall: false,
    small: false,
    medium: false,
    large: false
  });

  constructor(private breakpointObserver: BreakpointObserver) { 
    this.breakpointObserver.observe([
      Breakpoints.XSmall,
      Breakpoints.Small,
      Breakpoints.Medium,
      Breakpoints.Large
    ])
    .pipe(
      map(breakpointState => {
        return {
          xSmall: breakpointState.breakpoints[Breakpoints.XSmall],
          small: breakpointState.breakpoints[Breakpoints.Small],
          medium: breakpointState.breakpoints[Breakpoints.Medium],
          large: breakpointState.breakpoints[Breakpoints.Large]
        };
      })
    )
    .subscribe(responsiveSizes => {
      this.responsiveSizesSubject.next(responsiveSizes);
      console.log('responsiveSizes', responsiveSizes);
    });
  }
  
  getResponsiveSizes() {
    return this.responsiveSizesSubject.getValue();
  }

  getClasses(responsiveSizes: any): any {
    return {
      'xSmall':responsiveSizes.xSmall,
      'small':responsiveSizes.small,
      'medium':responsiveSizes.medium,
      'large':responsiveSizes.large
    };
  }
}