import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../../state-management/state';
import { Message } from '../../models/message';
import { Observable } from 'rxjs/Observable';
import { ADD_MESSAGE, UPDATE_MESSAGE, CREATE_MESSAGE } from '../../state-management/actions';
import { _MESSAGES } from '../../shared/mocks/message-mocks';

@Injectable()
export class MessageService {
  messages: Observable<Message[]>;
  constructor(
    private store: Store<State>
  ) {
    this.messages = store.select('messages');
  }

  loadMessages(){
    this.store.dispatch({ type: ADD_MESSAGE, payload: _MESSAGES });
  }
}
