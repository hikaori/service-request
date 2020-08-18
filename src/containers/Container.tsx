import React, { Component, Fragment } from "react";
import {
  Route,
  Switch,
  RouteComponentProps,
  withRouter,
} from "react-router-dom";
import Request from "./Request";
import CreateRequest from "./CreateRequest";
import Confirm from "./Confirm";
import Message from "./Message"

class Container extends Component<RouteComponentProps> {
  render() {
    return (
      <Fragment>
        <Switch>
          <Route exact path="/" component={Request}></Route>
          <Route exact path="/create-request" component={CreateRequest}></Route>
          <Route
            exact
            path="/create-request/confirm"
            render={(props) => (
              <Confirm
                title="新規お問い合わせ"
                comment1="お問い合わせ窓口の混雑状況によっては、返信にお時間を頂く場合がございます。"
                comment2="予めご了承の程、お願いお願い申し上げます。"
                {...props}
              />
            )}
                ></Route>
                <Route
            exact
            path="/message/send"
            render={(props) => (
              <Confirm
                title="AAAA"
                comment1="お問い合わせ窓口の混雑状況によっては、返信にお時間を頂く場合がございます。"
                comment2="予めご了承の程、お願いお願い申し上げます。"
                {...props}
              />
            )}
                ></Route>
                <Route
            exact
            path="/message/solved"
            render={(props) => (
              <Confirm
                title="AAAA"
                comment1="お問い合わせいただきありがとうございました。"
                comment2="今後もご不明な点がございましたら、お問い合わせください。"
                {...props}
              />
            )}
          ></Route>
          <Route exact path="/message/:id" component={Message}></Route>
          
        </Switch>
      </Fragment>
    );
  }
}
export default withRouter(Container);
