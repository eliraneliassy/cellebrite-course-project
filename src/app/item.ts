

export interface Category {
    href: string;
    name: string;
}

export interface Order {
    href: string;
}

export interface OrderEmail {
    href: string;
}

export interface MerchantData {
    _id: string;
    updateTime: number;
    createTime: number;
    hidden: boolean;
    name: string;
    logoUrl?: any;
    serviceFormUrl: string;
    servicePhoneNumber: string;
    priceDropPolicyUrl: string;
    returnPolicyUrl: string;
    websiteUrl: string;
    editable: boolean;
    supportsPriceDrop: boolean;
    href: string;
    serviceEmail: string;
}

export interface Item {
    _id: string;
    updateTime: number;
    href: string;
    description: string;
    productCode?: any;
    purchaseDate: string;
    price: number;
    quantity: number;
    productUrl?: any;
    imageUrl: string;
    imageWidth: number;
    imageHeight: number;
    returnByDate?: any;
    category: Category;
    parsingConfidence: number;
    returend: boolean;
    order: Order;
    shipments: any[];
    orderEmails: OrderEmail[];
    shipmentEmails: any[];
    priceHistory: any[];
    merchantData: MerchantData;
    userName: string;
    userFullName: string;
    userImageUrl: string;
    fashbashId: string;
    productVisibility: boolean;
}




