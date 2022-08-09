interface LatestDto{
  stories: Array<Storie>
  top_stories: Array<TopStorie>
}
interface DailyDto{
  ga_prefix: string
  hint: string
  id: 9751391
  image: "https://picx.zhimg.com/v2-cc91f5a4c1be8dd3685fbb61946a2020.jpg?source=8673f162"
  image_hue: string
  title: string
  type: 0
  url: "https://daily.zhihu.com/story/9751391"
}



interface BaseStorie{
  ga_prefix: string
  hint: string
  id: number
  image_hue: string
  title: string
  /**
   *  i'd know what's meaing
   */
  type: number
  /**
   * link by zhihu 
   * exp: "https://daily.zhihu.com/story/9751391"
   */
  url:  string
}

interface Storie extends BaseStorie {
  images: Array<string>
}
interface TopStorie extends BaseStorie {
  image: string
}
