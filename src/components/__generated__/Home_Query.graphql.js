/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type Home_QueryVariables = {||};
export type Home_QueryResponse = {|
  +viewer: ?{|
    +id: ?string,
    +name: ?string,
  |}
|};
export type Home_Query = {|
  variables: Home_QueryVariables,
  response: Home_QueryResponse,
|};
*/


/*
query Home_Query {
  viewer {
    id
    name
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "User",
    "kind": "LinkedField",
    "name": "viewer",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "name",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "Home_Query",
    "selections": (v0/*: any*/),
    "type": "RootQuery",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "Home_Query",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "8005b7fb74ca2ec1575cfed9945d4da0",
    "id": null,
    "metadata": {},
    "name": "Home_Query",
    "operationKind": "query",
    "text": "query Home_Query {\n  viewer {\n    id\n    name\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '52f5defaadcbaab8b96a6ffbd9879602';

module.exports = node;
