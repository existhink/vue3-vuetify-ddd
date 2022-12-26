import {
  AppBaseDialog,
  AppBaseDialogAlert,
  AppBaseLabel,
  AppBaseTableFooter,
  AppBaseTableHeader,
  AppBaseWrapper,
  AppFormGroup,
} from '@/modules/app/ui/components/base';
import { AppLayoutDefault, AppLayoutEmpty } from '@/modules/app/ui/components/layouts';
import 'vue3-easy-data-table/dist/style.css';
import AppDataTable from 'vue3-easy-data-table';

/**
 * Global components
 * @param app
 */
const BaseComponentRegister = app => {
  /**
   * Base Components
   * To make a components can access without import please put in below
   */
  app
    .component('AppBaseWrapper', AppBaseWrapper)
    .component('AppFormGroup', AppFormGroup)
    .component('AppBaseLabel', AppBaseLabel)
    .component('AppBaseDialog', AppBaseDialog)
    .component('AppBaseDialogAlert', AppBaseDialogAlert)
    .component('AppBaseTableHeader', AppBaseTableHeader)
    .component('AppBaseTableFooter', AppBaseTableFooter);

  /**
   * Base Layouts
   */
  app.component('EmptyLayout', AppLayoutEmpty);
  app.component('DefaultLayout', AppLayoutDefault);

  /**
   * DataTable [https://hc200ok.github.io/vue3-easy-data-table-doc/getting-started.html]
   */
  app.component('AppDataTable', AppDataTable);
};

export default BaseComponentRegister;
