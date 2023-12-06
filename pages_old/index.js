import { useState } from 'react'
import { StyleSheet, Text, View, ScrollView, TextInput } from 'react-native'
import { useGetFileList } from '../services/github'
import { useRouter } from 'next/router'
import startCase from 'lodash/startCase'

export default function App(props) {
  const [filter, setFilter] = useState('')
  const {basePath} = useRouter()

  const files = props.files?.filter(file => {
    if (!filter) {
      return true
    }
    const path = file.path.replace('.md', '')
    const title = path.replaceAll('-', ' ')
    return title.includes(filter)
  }) || []

  console.log('filter: ', filter)

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text accessibilityRole="header" style={styles.text}>
          The Great Cook Up
        </Text>

        <TextInput
          style={styles.input}
          onChangeText={setFilter}
          value={filter}
        />

        {files.map(file => {
          const path = file.path.replace('.md', '')
          const title = startCase(path.replaceAll('-', ' '))
          return (
            <Text key={path} style={styles.link} accessibilityRole="link" href={`${basePath}/${path}`}>{title}</Text>
          )
        })}
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexGrow: 1,
    //justifyContent: 'center',
    marginBottom: 50,
    marginTop: 50
  },
  link: {
    //color: 'blue',
    marginTop: '0.5rem',
    marginBottom: '0.5rem'
  },
  textContainer: {
    alignItems: 'center',
    marginTop: 16,
  },
  text: {
    alignItems: 'center',
    fontSize: 24,
    marginBottom: 24,
  },
  input: {
    borderWidth: 1,
    marginBottom: 20
  }
})


// called at build time
export async function getStaticProps() {
  const files = await useGetFileList()
  return {
    props: {
      files
    }
  }
}