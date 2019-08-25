import * as React from 'react';
import styles from './SpfxKey.module.scss';
import { ISpfxKeyProps } from './ISpfxKeyProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { sp } from "@pnp/sp";

import { DetailsListDocumentsExample } from './DetailsList'

export default class SpfxKey extends React.Component<ISpfxKeyProps, {}> {


  private _test = () => {
    // get all the items from a list
    sp.web.lists.get().then((items: any[]) => {
      console.log(items);
    });
  }

  public render(): React.ReactElement<ISpfxKeyProps> {
    return (
      <div >
        <DetailsListDocumentsExample />
      </div>
    );
  }
}
