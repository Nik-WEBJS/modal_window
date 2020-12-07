const modal = $.modal({
    title: 'Nik modal',
    closable: true,
    content: `
        <h4>Modal is working</h4>
        <p>Lorem LoremLoremLoremLoremLorem Lorem</p>
    `,
    width: '400px',
    footerButtons: [
        {text: 'Ok', type: 'primary', handler(){
            console.log('Primary btn click')
            modal.close()
        }},
        {text: 'Cancel', type: 'danger', handler(){
            console.log('Danger btn click')
            modal.close()
        }}
    ]
})
