import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  mainContainer: { flex: 1 },
  container: {
    marginHorizontal: 16,
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
    marginBottom: 10,
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    marginBottom: 15,
  },
  meta: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  metaText: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  metaIcon: {
    marginRight: 2,
  },
  metaInfo: {
    color: "#808080",
  },
  content: {
    lineHeight: 24,
    textAlign: "justify",
    color: "#808080",
    fontSize: 16,
  },
  quoteContainer: {
    backgroundColor: "#F3F4F8",
    padding: 16,
    borderRadius: 15,
    marginBottom: 20,
  },
  quote: {
    fontStyle: "italic",
    marginBottom: 8,
    marginTop: 8,
  },
  signature: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  signatureLine: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    marginBottom: 8,
  },
  signatureText: {
    marginLeft: 8,
  },
  postTagContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20,
  },
  postTagText: { fontSize: 16 },
  postTagWrapper: { flexDirection: "row", gap: 10, marginLeft: 10 },
  postTagButton: { backgroundColor: "#FFFF", padding: 10, borderRadius: 6 },
});
