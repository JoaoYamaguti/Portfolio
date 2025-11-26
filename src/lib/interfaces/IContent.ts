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
      status: string
      description: string
      backgroundImage: string
      repository: string
      link: string
      technologies: {
        title: string
        icons: string[]
      }[]
    }[]
    repositoryLabel: string
    linkLabel: string
  }
  socialMediasTitle: string
  EmailCopiedMessage: string
  resumeLabel: string
  resumeClickLabel: string
}
