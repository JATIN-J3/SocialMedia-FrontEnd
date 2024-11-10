import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk  from "redux-thunk";
import authReducer from "./Auth/auth.Reducer";
import { postReducer } from "./Post/post.reducer";
import commentReducer from "./Comment/comment.reducer";
import { reelsReducer } from "./Reels/reels.reducer";
import { messagesReducer } from "./Message/message.reducer";


export const rootReducer=combineReducers({
    auth:authReducer,
  post: postReducer,
  comment:commentReducer,
  reel:reelsReducer,
  chat:messagesReducer

});

export const store=legacy_createStore(rootReducer,applyMiddleware(thunk));
