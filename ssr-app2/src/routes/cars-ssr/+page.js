import { browser, dev } from '$app/env';

export function get() {
    alert()
    // Do dynamc fetching or computing here
  
    return {
      body: {
        title: 'Dashboard panel'
      }
    }
  }

