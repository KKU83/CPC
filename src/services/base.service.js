import { Observable } from "rxjs/Rx";

export class BaseService {
  api = "https://localhost:5001/api/v1";

  handleError(error) {
    const applicationError = error.headers["Application-Error"];

    if (applicationError) {
      return Observable.throw(applicationError);
    }

    let modelStateErrors = [];

    if (error.data) {
      for (const key in error.data) {
        if (error.data[key]) {
          modelStateErrors.push(error.data[key]);
        }
      }
    }

    modelStateErrors = modelStateErrors.length === 0 ? null : modelStateErrors;

    return Observable.throw(modelStateErrors || "Server error");
  }
}
