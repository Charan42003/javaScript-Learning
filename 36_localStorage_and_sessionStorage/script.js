// Set localStorage(items)
                        // 'key', 'value'
    localStorage.setItem("firstName", "Charan")
    localStorage.setItem('place', 'Bangalore')

// Get localStorage(items)
                                // key
    let a = localStorage.getItem('firstName')
    console.log(a)

// Remove localStorage(items)
                          // key
    localStorage.removeItem('place')

// Set sessionStorage(items)
                        // 'key', 'value'
    sessionStorage.setItem("firstName", "Ron")
    sessionStorage.setItem('place', 'Assam')

// Get sessionStorage(items)
                                // key
    let b = sessionStorage.getItem('place')
    console.log(b)

// Remove sessionStorage(items)
                            // key
    sessionStorage.removeItem('firstName')
