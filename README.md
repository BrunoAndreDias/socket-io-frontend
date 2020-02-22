### To run this local we need a ".env.local" file with:

```
REACT_APP_API_URL="http://127.0.0.1:4001"
```

## App description

This application use ant design and i18next to support multi language.
Was generated from create-react-app.




This application consist on todo list where we can add and remove todo. These todos use socketIo to communicate with the api to provide real time management.
There is also communication with socketIo to get from the api real time weather. from the actual localization. We must accept the localization when we access the browser (chrome for example) in order to propperly work. This localization is provided from the geolocation api.



Once this is a simple api there wasn't need to implement caching. I would do it with graphql but since i didn't use it because I'm already using React instead of Vue i didn't implemented. React doesn't have a good way of caching itself.


For some reason that i din't get it, at this moment the dockerfile from the api isn't working properly.


# Check the links for more details:

- https://create-react-app.dev/docs/getting-started/
- https://react.i18next.com/
- https://ant.design/docs/react/introduce
- https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API