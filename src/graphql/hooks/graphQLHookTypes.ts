import { Item } from '../../models';


export type GetGraphQLProps<T extends Item> = {
  id?: string,
  name?: string,
  model?: { new (): T; },
  [key: string]: any,
}

export type GetGraphQLResults<T extends Item> = {
    item: T | null,
    gettingItem: boolean,
    getError: string | null,
}

export type GetGraphQL<T extends Item> = (props: GetGraphQLProps<T>) => GetGraphQLResults<T>;

export const GetGraphQLPlaceholder = () => ({
  item: null,
  gettingItem: false,
  getError: null,
})


export type ListGraphQLProps = {
  filterString?: string,
  limit?: number,
  offset?: number,
}

export type ListGraphQLResults<T extends Item> = {
    items: T[] | undefined,
    gettingItems: boolean,
    listError: string | null,
}


export type UpdateGraphQLProps = {
  currentId?: string,
  [key: string]: any,
}

export type UpdateGraphQLResults<T extends Item> = {
  item: T | null,
  gettingItem: boolean,
  getError: string | null,
  updateItem: (item: T) => Promise<void>,
  updatingItem: boolean,
  updateError: string | null,
  deleteItem: (item: T, reason?: string) => Promise<void>,
  deleteError: string | null,
}

export type UpdateGraphQL<T extends Item> = (props: UpdateGraphQLProps) => UpdateGraphQLResults<T>;

export const UpdateGraphQLPlaceholder = () => ({
  item: null,
  gettingItem: false,
  getError: null,
  updateItem: (item: Item) => {},
  updatingItem: false,
  updateError: null,
  deleteItem: (item: Item, reason?: string) => {},
  deleteError: null,
});
