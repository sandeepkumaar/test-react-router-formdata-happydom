//import "fake-indexeddb/auto";
import * as fakeIndexedDB  from "fake-indexeddb";



let idbMethods = [
    "indexedDB",
    "IDBCursor",
    "IDBCursorWithValue",
    "IDBDatabase",
    "IDBFactory",
    "IDBIndex",
    "IDBKeyRange",
    "IDBObjectStore",
    "IDBOpenDBRequest",
    "IDBRequest",
    "IDBTransaction",
    "IDBVersionChangeEvent",
];

const registered = [];
const register = function() {
  if (registered.length) {
    throw new Error('Failed to register. Fake IndexedDB is already registered');
  };
  for(const idbMethod of idbMethods) {
    global[idbMethod] =  fakeIndexedDB[idbMethod];
    registered.push(idbMethod);
  }
};

const unregister = function() {
  if (!registered.length) {
    throw new Error(
      'Failed to unregister. Fake IndexedDB has not previously been globally registered.'
    );
  };	
  while (registered.length) {
    const key = registered.pop();
    delete global[key];
  }

};

export {
  register,
  unregister
};
