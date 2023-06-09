
interface iconType{
  publicEllipse:any
  publicVectorOne: any
  publicVectorSecond: any
  privateClound: any
  privateLock: any
  hybridUp: any
  hybridMidle: any
  hybridDown: any
};
type PropsApproaches = {
  ordinal:number,
  icon: iconType;
  header: string;
  paragrap: string;
};
type propsForTechnology ={
  img:string;
  paragraph :string;
  myclass?: string;
}

export type {  PropsApproaches ,propsForTechnology};
