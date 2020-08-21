export abstract class CacheService {
  protected getItem<T>(key: string): T {
    let data = localStorage.getItem(key);
    let result: any;
    if (data == null) {
      data = 'undefined';
    }

    if (data !== undefined) {
      try {
        result = JSON.parse(data);
      } catch (errror) {
        //this ugly i know but it works ;)
      }
    }

    //this is kind of hack and Angular weakness
    if (data && data !== 'undefined') {
      return result;
    } else {
      return result;
    }
  }

  protected setItem(key: string, data: object | string) {
    if (typeof data === 'string') {
      localStorage.setItem(key, data);
    }
    localStorage.setItem(key, JSON.stringify(data));
  }

  protected removeItem(key: string) {
    localStorage.removeItem(key);
  }

  protected clear() {
    localStorage.clear();
  }
}
