const mapping: Record<string, string> = {
  'ecommerce-websites': 'ecommerce_website',
  organizations: 'organization',
  products: 'product',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
