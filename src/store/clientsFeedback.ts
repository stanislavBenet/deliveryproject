import { makeAutoObservable } from "mobx";

class ClientFeedback {
  messages:any[] = [];
  constructor() {
    makeAutoObservable(this);
  }

  addNewMessage(message:any) {
      this.messages.push(message);
  }
}

export default new ClientFeedback();
