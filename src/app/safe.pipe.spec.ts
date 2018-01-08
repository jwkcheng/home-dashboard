
import { TestBed, inject } from '@angular/core/testing';

import { SafePipe } from './safe.pipe';

import { DomSanitizer } from '@angular/platform-browser';

describe('SafePipe', () => {
  it('create an instance',  inject([ DomSanitizer ], (sanitizer: DomSanitizer) => {
    const pipe = new SafePipe(sanitizer);
    expect(pipe).toBeTruthy();
  }));
});
