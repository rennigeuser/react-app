

export interface ProductData { 
  title: string,
  picture: string,
  alt?: string,
  body?: string
}


export interface contextStorage {
  isAuth: boolean,
  setIsAuth(v: boolean): void,
  isLoading: boolean,
  setIsLoading(v: boolean): void
}



