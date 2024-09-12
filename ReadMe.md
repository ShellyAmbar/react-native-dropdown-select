- A react native custom dropdown with single select, in typescript.

- It comes with a built-in TypeScript typings and is compatible with all popular JavaScript frameworks. You can use it directly or leverage well-maintained wrapper packages that allow for a more native integration with your frameworks of choice.

# Example:

![](./assets/videos/1.gif)

## How to use:

```
import Picker from 'react-native-dropdown-select';

    <Picker
              defaultSelectedId={defaultSelectedMyGenderIndex}
              dataInput={myGenderitemList}
            />


   const myGenderitemList = useMemo(
    () => [
      {
        id: 0,
        text: Gender.WOMEN,
        onClick: () => {
          setGender(Gender.WOMEN);
        },
      },
      {
        id: 1,
        text: Gender.MEN,
        onClick: () => {
          setGender(Gender.MEN);
        },
      },
      {
        id: 2,
        text: Gender.TRANS,
        onClick: () => {
          setGender(Gender.TRANS);
        },
      },
      {
        id: 3,
        text: Gender.OTHER,
        onClick: () => {
          setGender(Gender.OTHER);
        },
      },
    ],
    [],
  );
```

# Picker props -

| Name                  | Type      | Default |
| --------------------- | --------- | ------- |
| dataInput             | Item[]    |
| textStyle?: TextStyle |
| itemTextStyle?        | TextStyle |
| containerStyle?       | ViewStyle |
| defaultSelectedId     | number    |
| seperatorStyle?       | ViewStyle |

# Item props

| Name    | Type       | Default |
| ------- | ---------- | ------- |
| id      | number     |
| text    | string     |
| uri?    | string     |
| onClick | () => void |
