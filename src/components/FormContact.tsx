/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable @typescript-eslint/naming-convention */
import { useRouter } from "next/router";
import { siteMetadata } from "src/data/siteMetadata";

export const FormContact = () => {
  const router = useRouter();

  const handleRegisterUser = async (event: any) => {
    event.preventDefault();
    const res = await fetch("/api/send", {
      body: JSON.stringify({
        subject: "お問い合わせありがとうございます",
        to: siteMetadata.email,
        text:
          "以下の内容でお問い合わせを受け付けました。\n折り返しご連絡させていただきます。\n\n" +
          "お名前: " +
          event.target.fullname.value +
          " 様\n" +
          "電話番号: " +
          event.target.labo.value +
          "\nメールアドレス: " +
          event.target.email.value +
          "\n\nお問い合わせ内容:\n" +
          event.target.message.value,
        email: event.target.email.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const result = await res.json();
    router.push({
      pathname: "/success",
      query: result,
    });
  };

  return (
    <div>
      <div>
        <div className="container sm:mt-0 sm:p-6 lg:px-20">
          <form onSubmit={handleRegisterUser}>
            <div className="mb-3">
              <label htmlFor="fullname">お名前</label>
              <input
                id="fullname"
                name="fullname"
                type="text"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm nm-inset-gray-50-lg focus:border-gray-200 focus:ring-gray-200 sm:text-sm"
                placeholder="お名前"
                autoComplete="name"
                required
                minLength={3}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="labo">電話番号</label>
              <input
                id="labo"
                name="labo"
                type="tel"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm nm-inset-gray-50-lg focus:border-gray-200 focus:ring-gray-200 sm:text-sm"
                placeholder=""
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email">メールアドレス</label>
              <input
                id="email"
                name="email"
                type="email"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm nm-inset-gray-50-lg focus:border-gray-200 focus:ring-gray-200 sm:text-sm"
                placeholder="送信可能な形式：name@example.com"
                autoComplete="email"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="message">問合せ内容</label>
              <textarea
                id="message"
                name="message"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm nm-inset-gray-50-lg focus:border-gray-200 focus:ring-gray-200 sm:text-sm"
                rows={3}
                required
                minLength={20}
              ></textarea>
            </div>
            {/* <div className="flex my-6">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    id="newsletter"
                    name="newsletter"
                    className="form-checkbox"
                    onChange={handleOnChange}
                    checked={isCheckboxState}
                  />
                  <span className="ml-2 text-gray-200">メールの購読を希望 </span>
                </label>
              </div> */}
            <div className="py-3 px-4 text-right sm:px-6">
              <button
                type="submit"
                className="w-full rounded-md bg-gradient-to-r from-gray-400 to-gray-200 p-2 font-medium text-gray-200 shadow-md nm-concave-gray-400 focus:from-purple-700 focus:to-yellow-400 focus:outline-none focus:ring-2 focus:ring-offset-2"
              >
                送信
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
