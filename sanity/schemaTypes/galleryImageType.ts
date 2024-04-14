import { defineType, defineField } from "sanity";

export const galleryImageType = defineType({
    name: 'galleryimage',
    title: 'Image',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            type: 'string',
            title: 'Name',
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {source: 'name'},
        }),
        defineField({
            name: 'gallery',
            title: 'Gallery',
            type: 'string',
        }),
        defineField({
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {hotspot: true},
            fields: [
                {
                    name: 'alt',
                    title: 'Alt',
                    type: 'string',
                }
            ]
        })
    ]
})