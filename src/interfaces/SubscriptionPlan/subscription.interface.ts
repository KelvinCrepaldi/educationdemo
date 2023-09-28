export interface IBenefit {
  name: string;
  active: boolean;
}

export interface ISubscription {
  title: string;
  price: number;
  period: string;
  benefits: IBenefit[];
  purchaseUrl: string;
}

export interface SubscriptionCardProps {
  subscription: ISubscription;
}
