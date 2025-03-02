import React from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import { ClassicEditor, Essentials, Paragraph, Bold, Italic } from 'ckeditor5';
import { FormatPainter } from 'ckeditor5-premium-features';
import  { Controller } from 'react-hook-form'
export default function RTE({name, control,label}) {
  return (
   <div className='w-full'>{label && <label className='inline-block mb-1 pl-1'>{label}</label>}
   
   <Controller
   name={name || 'content'}
   control={control}
   render={({field: {onChange}}) => (

    <CKEditor
            editor={ ClassicEditor }
            config={ {
                licenseKey: 'eyJhbGciOiJFUzI1NiJ9.eyJleHAiOjE3NDE3Mzc1OTksImp0aSI6ImY5YzY0NGEwLTYyZTctNDE5NC1hZjcxLTU3NjFjOGU5YzlhYiIsInVzYWdlRW5kcG9pbnQiOiJodHRwczovL3Byb3h5LWV2ZW50LmNrZWRpdG9yLmNvbSIsImRpc3RyaWJ1dGlvbkNoYW5uZWwiOlsiY2xvdWQiLCJkcnVwYWwiLCJzaCJdLCJ3aGl0ZUxhYmVsIjp0cnVlLCJsaWNlbnNlVHlwZSI6InRyaWFsIiwiZmVhdHVyZXMiOlsiKiJdLCJ2YyI6ImIxZDNjMzY4In0.0M9QRXCY2J4AuAMaanBIdRADyCttWJXkb53vbSZKRd5bzs_1wAc7Hc4U_Lw7BU8dYQ6pKa-JWdD-uE_0zouo9g', // Or 'GPL'.
                plugins: [ Essentials, Paragraph, Bold, Italic, FormatPainter ],
                toolbar: [ 'undo', 'redo', '|', 'bold', 'italic', '|', 'formatPainter' ],
                initialData: '<p>Hello from CKEditor 5 in React!</p>',
            } }
            onEditorChange={onChange}
        />
    
   )}



      />
   
   
   </div>

   
  )
}
