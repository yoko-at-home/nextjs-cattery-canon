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
