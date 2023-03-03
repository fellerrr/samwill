import {defineField, defineType} from 'sanity'

export default defineType({
    name: 'demand',
    title: 'Demand',
    type: 'document',
    fields: [
        defineField({
            name: 'cardTitle',
            title: 'CardTitle',
            type: 'string',
        }),
        defineField({
            name: 'cardImage',
            title: 'Card Image',
            type: 'image',
            options: {
                hotspot: true
            }
        }),
        defineField({
            name: 'points',
            title: 'Points',
            type: 'array',
            of: [{type:"string"}]
        })
    ]
})
