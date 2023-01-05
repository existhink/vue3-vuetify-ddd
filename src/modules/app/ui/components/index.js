import {
  AppBaseBreadcrumb,
  AppBaseCard,
  AppBaseCardBusiness,
  AppBaseDialog,
  AppBaseDialogAlert,
  AppBaseFooter,
  AppBaseImageUploader,
  AppBaseLabel,
  AppBaseNavbar,
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
    .component('AppBaseBreadcrumb', AppBaseBreadcrumb)
    .component('AppBaseCard', AppBaseCard)
    .component('AppBaseCardBusiness', AppBaseCardBusiness)
    .component('AppBaseDialog', AppBaseDialog)
    .component('AppBaseDialogAlert', AppBaseDialogAlert)
    .component('AppBaseFooter', AppBaseFooter)
    .component('AppBaseImageUploader', AppBaseImageUploader)
    .component('AppBaseLabel', AppBaseLabel)
    .component('AppBaseNavbar', AppBaseNavbar)
    .component('AppBaseTableHeader', AppBaseTableHeader)
    .component('AppBaseTableFooter', AppBaseTableFooter)
    .component('AppBaseWrapper', AppBaseWrapper)
    .component('AppFormGroup', AppFormGroup);

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
