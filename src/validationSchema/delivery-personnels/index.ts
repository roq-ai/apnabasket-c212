import * as yup from 'yup';

export const deliveryPersonnelValidationSchema = yup.object().shape({
  name: yup.string().required(),
  store_manager_id: yup.string().nullable(),
});
