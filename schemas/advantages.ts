import {defineField, defineType} from 'sanity'

export default defineType({
    name: 'advantages',
    title: 'Advantages',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            description: 'Title of Advantage',
            type: 'string',
        }),
        defineField({
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true
            }
        }),
        defineField({
            name: 'subTitle',
            title: 'SubTitle',
            description: 'Описание преимущества',
            type: 'text',
        }),


    ]

})
