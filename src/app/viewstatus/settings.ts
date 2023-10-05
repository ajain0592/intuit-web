import { CustomRenderStatusComponent } from "./cutom-renderer/cutom-renderer.component";

export const REQUEST_TABLE_SETTINGS = {
    mode: 'external',
    pager: {
      perPage: 50
    },
    columns: {
      requestId: {
        title: 'Request ID'
      },
      // status: {
      //   title: 'Status'
      // },
      status: {
        type: 'custom',
        renderComponent: CustomRenderStatusComponent,
        title: 'Status'
    }
    },
    defaultStyle: false,
    attr: {
      class: 'table table-stripped'
    },
    actions:false
  
  };