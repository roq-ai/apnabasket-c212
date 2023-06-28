const mapping: Record<string, string> = {
  'delivery-personnels': 'delivery_personnel',
  orders: 'order',
  products: 'product',
  users: 'user',
  vendors: 'vendor',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
