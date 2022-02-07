//
// Copyright © 2020 Anticrm Platform Contributors.
//
// Licensed under the Eclipse Public License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License. You may
// obtain a copy of the License at https://www.eclipse.org/legal/epl-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//
// See the License for the specific language governing permissions and
// limitations under the License.
//

import { mergeIds } from '@anticrm/platform'
import type { Ref, Doc } from '@anticrm/core'
import type { Resource } from '@anticrm/platform'
import type { AnyComponent } from '@anticrm/ui'
import view, { viewId, Action } from '@anticrm/view'

export default mergeIds(viewId, view, {
  action: {
    Delete: '' as Ref<Action>,
    Move: '' as Ref<Action>
  },
  actionImpl: {
    Delete: '' as Resource<(doc: Doc) => Promise<void>>,
    Move: '' as Resource<(doc: Doc) => Promise<void>>
  },
  component: {
    StringEditor: '' as AnyComponent,
    StringPresenter: '' as AnyComponent,
    HTMLPresenter: '' as AnyComponent,
    BooleanPresenter: '' as AnyComponent,
    BooleanEditor: '' as AnyComponent,
    TimestampPresenter: '' as AnyComponent,
    DateEditor: '' as AnyComponent,
    DatePresenter: '' as AnyComponent,
    TableView: '' as AnyComponent,
    RolePresenter: '' as AnyComponent
  }
})
