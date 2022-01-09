export type retiredProps = {
  retired: [
    {
      id: string;
      createdAt: Date;
      updatedAt: Date;
      publishedAt: Date;
      revisedAt: Date;
      title: string;
      description: string;
      imgSrc: {
        height: number;
        url: string;
        width: number;
      };
      body: HTMLAnchorElement;
    }
  ];
};
export type retiredPageProps = {
  retired: {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    publishedAt: Date;
    revisedAt: Date;
    title: string;
    description: string;
    imgSrc: {
      height: number;
      url: string;
      width: number;
    };
    body: HTMLAnchorElement;
  };
};
export type availableProps = {
  available: [
    {
      id: string;
      createdAt: Date;
      updatedAt: Date;
      publishedAt: Date;
      revisedAt: Date;
      title: string;
      description: string;
      imgSrc: {
        height: number;
        url: string;
        width: number;
      };
      body: HTMLAnchorElement;
    }
  ];
};
export type availablePageProps = {
  available: {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    publishedAt: Date;
    revisedAt: Date;
    title: string;
    description: string;
    imgSrc: {
      height: number;
      url: string;
      width: number;
    };
    body: HTMLAnchorElement;
  };
};

export type About = {
  data: {
    createdAt: Date;
    updatedAt: Date;
    publishedAt: Date;
    revisedAt: Date;
    title: string;
    body: HTMLAnchorElement;
  };
};
