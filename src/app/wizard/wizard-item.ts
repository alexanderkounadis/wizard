import { Component, OnInit, Type } from '@angular/core';
import { Observable } from 'rxjs';

export abstract class WizardItem<T, Z> {
  public model: Z;
  public progress(): Observable<T> {
    return this.next();
  }
  public abstract next(data?: any): Observable<T>;
  public abstract previous(): Observable<T>;
  public abstract isValid(): boolean;
  constructor(public component: Type<any>, public data: any = {}) { }
}
