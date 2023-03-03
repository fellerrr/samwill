interface SanityBody {
    _createdAt:string;
    _id:string;
    _rev:string;
    _updatedAt:string;
}

interface Image {
    _type:'image';
    asset: {
        ref: string;
        type:'reference';
    }
}

export interface Social extends SanityBody {
    _type:'social';
    title:string;
    url:string;
}

export interface PageInfo extends SanityBody {
    _type: 'pageInfo';
    address: string;
    email: string;
    name: string;
    phoneNumber: string;
    role: string;
    heroImage: Image;
}

export interface Demand extends SanityBody {
    _type:'demand';
    cardImage: Image;
    cardTitle: string;
    points:string[];
}

export interface Advantages extends SanityBody {
    _type:'advantages';
    image: Image;
    title: string;
    subTitle:string;
}

export interface Sale extends SanityBody {
    _type:'sale';
    image: Image;
    title: string;
    price:string;
}


