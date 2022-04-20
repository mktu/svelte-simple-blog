export type Auther = {
    fullName : string,
    profileImage ?: string,
    biography ?: string,
    description ?: string
}

export type MetaArticle = {
    title ?: string,
    description ?: string,
    ogImage ?: {
        src: string
    }
}

export type MetaArticleSys = {
    model : string,
    owner : string,
    createdAt : string,
    updatedAt : string
}

export type Article = {
    _id : string,
    title : string,
    slug : string,
    meta ?: MetaArticle,
    body ?: string,
    coverImage ?: {
        id : string,
        src : string,
    }
    author : string,
    categories : string,
    _sys : MetaArticleSys
}