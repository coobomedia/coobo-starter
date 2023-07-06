import {
  Twitter,
  Facebook,
  Instagram,
  Youtube,
  Github,
  Menu,
  X,
  ChevronsRight,
  Linkedin,
  type Icon as LucideIcon,
  LucideProps,
} from "lucide-react";

export type Icon = LucideIcon;

export const Icons = {
  twitter: Twitter,
  x: X,
  menu: Menu,
  facebook: Facebook,
  instagram: Instagram,
  youtube: Youtube,
  github: Github,
  linkedin: Linkedin,
  chevronsRight: ChevronsRight,
  logo: (props: LucideProps) => (
    <svg {...props} viewBox="87.78 164.11 616.4 271.39">
      <path
        fill="#f26739"
        d="M627.592 284.319A75.357 75.357 0 0 0 574.05 306.6a75.355 75.355 0 0 0-53.28-22.281v.017c-.437-.008-.873-.021-1.312-.021a75.128 75.128 0 0 0-30.445 6.416V164.112h-44.094V329.9a75.533 75.533 0 0 0-122.911-23.3 75.449 75.449 0 0 0-96.986-8.518q-2.71 1.909-5.239 4.047-2.487 2.1-4.791 4.4-2.265 2.27-4.332 4.728-2.044 2.425-3.888 5.017-1.824 2.574-3.433 5.3-1.6 2.706-2.98 5.55t-2.51 5.819a75.561 75.561 0 0 0 0 53.913q1.139 2.972 2.51 5.82t2.98 5.55q1.61 2.726 3.433 5.3 1.839 2.592 3.888 5.017 2.067 2.453 4.332 4.727 2.3 2.3 4.791 4.4 2.529 2.133 5.239 4.047a75.449 75.449 0 0 0 96.986-8.518 75.545 75.545 0 0 0 126.023-31.846 75.716 75.716 0 0 0 72.477 54.147h.262a75.355 75.355 0 0 0 53.28-22.281 75.574 75.574 0 1 0 53.542-128.893ZM489.013 297.68a68.861 68.861 0 0 1 30.445-7.062c.439 0 .875.012 1.312.02v-.016a69.074 69.074 0 0 1 49.022 20.633q2.233 2.262 4.258 4.721 2.064 2.51 3.892 5.211 1.9 2.805 3.523 5.8a69.021 69.021 0 0 1 8.333 32.921 37.834 37.834 0 1 0 4.269-17.419 74.894 74.894 0 0 0-2.4-8.092 43.932 43.932 0 1 1-8.164 25.511 63.061 63.061 0 0 0-62.728-62.987v.016c-.437-.009-.873-.02-1.312-.02a62.586 62.586 0 0 0-30.445 7.87ZM596.1 359.908a31.5 31.5 0 1 1 31.5 31.5 31.53 31.53 0 0 1-31.5-31.5Zm-107.087-47.792a56.339 56.339 0 0 1 30.445-8.9c.439 0 .876.011 1.312.021v-.017a56.686 56.686 0 0 1 56.43 56.688 50.066 50.066 0 0 0 7.415 26.285 50.4 50.4 0 1 0 4.262-58.5q-1.447-3.059-3.155-5.961a56.692 56.692 0 1 1 0 76.36 56.971 56.971 0 0 1-8.15-11.523 56.411 56.411 0 0 1-6.671-26.657 50.084 50.084 0 0 0-7.414-26.285 50.55 50.55 0 0 0-42.716-24.1v.017c-.436-.011-.873-.021-1.312-.021a50.118 50.118 0 0 0-30.445 10.278ZM552 359.908a31.529 31.529 0 0 1-31.23 31.492h-.262a31.5 31.5 0 0 1 0-62.99h.262A31.528 31.528 0 0 1 552 359.908Zm-75.589-189.5h6.3v189.5a37.836 37.836 0 0 0 37.797 37.792h.262a37.824 37.824 0 0 0 33.262-20.371 75.192 75.192 0 0 0 2.406 8.092A44.06 44.06 0 0 1 520.77 404h-.262a44.144 44.144 0 0 1-44.094-44.093Zm-12.6 0h6.3v189.5a50.45 50.45 0 0 0 50.397 50.392h.262a50.311 50.311 0 0 0 38.454-18.17q1.447 3.057 3.154 5.961A56.555 56.555 0 0 1 520.77 416.6h-.262a56.756 56.756 0 0 1-56.692-56.692ZM268.466 429.2a68.884 68.884 0 0 1-38.206-11.515q-2.71-1.8-5.238-3.84-2.49-2.008-4.786-4.237-2.271-2.2-4.338-4.608-2.05-2.387-3.885-4.955t-3.432-5.315q-1.609-2.758-2.968-5.674-1.4-3.013-2.519-6.177a69.286 69.286 0 0 1 0-45.938q1.114-3.161 2.519-6.177 1.356-2.913 2.968-5.674 1.6-2.739 3.432-5.315t3.885-4.955q2.064-2.4 4.338-4.608 2.293-2.226 4.786-4.238 2.525-2.037 5.238-3.839a69.156 69.156 0 0 1 87.49 9.122q2.233 2.262 4.258 4.721 2.063 2.51 3.892 5.211 1.9 2.805 3.522 5.8a68.99 68.99 0 0 1 8.333 32.921 37.836 37.836 0 1 0 4.27-17.419 74.894 74.894 0 0 0-2.4-8.092 43.932 43.932 0 1 1-8.164 25.511 63.069 63.069 0 1 0-17.6 43.629q1.842 2.6 3.894 5.024a69.08 69.08 0 0 1-49.289 20.637Zm65.213-107.47a56.692 56.692 0 1 1 0 76.36 56.866 56.866 0 0 1-8.15-11.523 56.411 56.411 0 0 1-6.671-26.657 50.084 50.084 0 0 0-7.414-26.285 50.4 50.4 0 1 0-4.262 58.5q1.446 3.057 3.154 5.961a56.622 56.622 0 1 1 14.821-38.18 50.066 50.066 0 0 0 7.415 26.285 50.4 50.4 0 1 0 4.262-58.5q-1.447-3.06-3.155-5.963Zm10.375 38.18a31.5 31.5 0 1 1 31.5 31.5 31.531 31.531 0 0 1-31.5-31.502Zm31.5 69.29a69.08 69.08 0 0 1-49.285-20.637q-2.232-2.262-4.257-4.721-2.064-2.511-3.893-5.211-1.9-2.805-3.522-5.8a69.021 69.021 0 0 1-8.333-32.921 37.836 37.836 0 1 0-4.27 17.419 74.965 74.965 0 0 0 2.406 8.092 43.939 43.939 0 1 1 8.163-25.511 62.905 62.905 0 0 0 13.337 38.719 63.555 63.555 0 0 0 4.259 4.908 62.991 62.991 0 1 0 0-87.258q-1.84-2.6-3.894-5.024A69.275 69.275 0 1 1 375.55 429.2Zm-75.589-69.29a31.5 31.5 0 1 1-31.5-31.5 31.531 31.531 0 0 1 31.496 31.498Zm220.805 69.284h-.262a69.368 69.368 0 0 1-69.29-69.29v-189.5h6.3v189.5a63.063 63.063 0 0 0 62.99 62.996h.262a62.816 62.816 0 0 0 45.13-19.363q1.84 2.6 3.893 5.024a69.074 69.074 0 0 1-49.023 20.633Zm106.822 0a69.076 69.076 0 0 1-49.284-20.637q-2.234-2.262-4.258-4.721-2.064-2.511-3.893-5.211-1.9-2.805-3.522-5.8a69.021 69.021 0 0 1-8.333-32.921 37.832 37.832 0 0 0-37.532-37.79h-.262a37.785 37.785 0 0 0-31.5 16.933v-10.99a43.924 43.924 0 0 1 30.445-12.242c.439 0 .876.008 1.312.021v-.017a44.134 44.134 0 0 1 43.835 44.089 62.905 62.905 0 0 0 13.341 38.721 63.555 63.555 0 0 0 4.259 4.908 62.991 62.991 0 1 0 0-87.258q-1.841-2.6-3.893-5.024A69.275 69.275 0 1 1 627.592 429.2Z"
      />
      <path
        fill="#f26739"
        d="M177.957 387.831a31.5 31.5 0 1 1 .507-55.574c.4.3.795.616 1.162.94l22.724-38.038c-1.795-1.084-3.635-2.1-5.524-3.036a75.59 75.59 0 1 0 .048 135.545q2.831-1.4 5.522-3.038l-22.77-38.114a19.776 19.776 0 0 1-1.669 1.315Zm15.668 34.4a69.29 69.29 0 1 1-.048-124.668l-3.241 5.425a62.991 62.991 0 1 0 .049 113.819Zm-6.483-10.852a56.692 56.692 0 1 1-.049-102.962l-3.25 5.441a50.393 50.393 0 1 0 .049 92.08ZM163.408 404a44.093 44.093 0 1 1 17.174-84.685l-3.266 5.465a37.794 37.794 0 1 0 .051 70.234l3.264 5.465A43.74 43.74 0 0 1 163.408 404Z"
      />
      <path
        fill="#808184"
        d="M550.152 207.166a15.552 15.552 0 0 0-12.493 6.215 15.661 15.661 0 0 0-28.153 9.446v22.855h6.547v-22.855a9.113 9.113 0 1 1 18.226 0v22.855h6.759v-22.855a9.114 9.114 0 1 1 18.227 0v22.855h6.548v-22.855a15.679 15.679 0 0 0-15.661-15.661ZM599.3 210.008a20.184 20.184 0 0 0-19.917-.074c-5.844 3.341-9.068 9.253-9.078 16.61-.389 10.374 7.133 16.81 14.761 18.586a20.9 20.9 0 0 0 4.731.541 18.135 18.135 0 0 0 17.1-10.947l.379-.851-5.5-2.934-.443.964a12.925 12.925 0 0 1-15.022 7.233 11.847 11.847 0 0 1-9.41-11.332h31.213l.01-.99c.076-7.455-3.056-13.424-8.824-16.806Zm-21.666 11.961c1.73-6.175 7.283-8.43 11.692-8.372 4.775.017 10.056 2.622 11.664 8.372ZM643.051 211.8a19.158 19.158 0 1 0 6.9 14.721v-31.844h-6.9Zm-2.685 7.138a12.087 12.087 0 0 1 2.652 7.586 12.25 12.25 0 1 1-3.382-8.431s.689.807.73.844ZM685.022 207.166a19.163 19.163 0 1 0 12.256 33.882v4.429h6.9v-19.152a19.181 19.181 0 0 0-19.156-19.159Zm8.845 27.586a12.363 12.363 0 1 1 .726-.841c-.042.038-.726.841-.726.841ZM654.788 208.716h6.47v36.774h-6.47zM658.008 194.42a4.254 4.254 0 0 0-3.9 2.113 5.223 5.223 0 0 0 0 5.135 4.29 4.29 0 0 0 3.8 2.139h.087a4.374 4.374 0 0 0 3.952-2.147 5.205 5.205 0 0 0 0-5.115 4.288 4.288 0 0 0-3.939-2.125Z"
      />
    </svg>
  ),
  // logo: Logo,
};