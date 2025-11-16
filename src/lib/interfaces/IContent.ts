export interface IContent {
  hello: string
  welcome: string
  description: string
  stacks: {
    title: string
  }
  projects: {
    title: string
    list: {
      name: string
      description: string
      backgroundImage: string
      link: string
    }[]
  }
  socialMediasTitle: string
}
