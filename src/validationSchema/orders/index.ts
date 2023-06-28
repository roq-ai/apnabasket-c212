import * as yup from 'yup';

export const orderValidationSchema = yup.object().shape({
  status: yup.string().required(),
  customer_service_representative_id: yup.string().nullable(),
  store_manager_id: yup.string().nullable(),
});
