
// FurkanO's answer in https://stackoverflow.com/questions/18017869/build-tree-array-from-flat-array-in-javascript

import {Item} from '../models';

type TreeItem<T> = T & {
  parent?: TreeItem<T>;
}

export type TreeObject<T> = T & {
  children?: TreeObject<T>[];
  //parent?: TreeObject<T>;
}

export const createTree = <T extends Item>(dataList: TreeItem<T>[]|null|undefined): TreeObject<TreeItem<T>>[] => {
  const hashTable = Object.create(null);
  dataList?.forEach(aData => {
    if (aData?.id) {
      hashTable[aData.id] = {...aData, children: []}
    }
  });
  const dataTree: T[] = [];
  dataList?.forEach(aData => {
    if (aData?.id) {
      if (aData?.parent?.id) {
        hashTable[aData?.parent?.id].children.push(hashTable[aData?.id]);
      } else {
        dataTree.push(hashTable[aData?.id]);
      }
    }
  });
  return dataTree;
};