type Props = {
  dateString:string,
  options:object,
}

export function formatDate({dateString, options} : Props) {
  const { format } = new Intl.DateTimeFormat('en-US', options)
  return format(new Date(dateString))
}