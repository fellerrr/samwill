import {defineField, defineType} from 'sanity'

export default defineType({
    name: 'sale',
    title: 'Sale',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            description: 'Title of Sales',
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
            name: 'price',
            title: 'Price',
            type: 'string',
        }),
    ]
})